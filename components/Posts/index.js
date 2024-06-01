import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Post from './Post';
import Container from '../common/Container';
import useWindowWidth from '../hooks/useWindowWidth';

const PostListContainer = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const LoadMoreButton = styled.button(() => ({
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  fontSize: 16,
  marginTop: 20,
  transition: 'background-color 0.3s ease',
  fontWeight: 600,

  '&:hover': {
    backgroundColor: '#0056b3',
  },
  '&:disabled': {
    backgroundColor: '#808080',
    cursor: 'default',
  },
}));

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postCount, setPostCount] = useState(10); // Ensuring postCount is initialized to 10
  const [allPostsShown, setAllPostsShown] = useState(false); // Track if all posts are shown
  const { isSmallerDevice } = useWindowWidth();
console.log(posts);
  const fetchPosts = async (start, limit) => {
    try {
      setIsLoading(true);
      const { data: fetchedPosts } = await axios.get('/api/v1/posts', {
        params: { start, limit },
      });
      setPosts(prevPosts => [
        ...prevPosts,
        ...fetchedPosts.slice(0, limit),
      ]);
      setIsLoading(false);
      // Check if all posts are shown after fetching
      if (posts.length >= fetchedPosts.length) {
        setAllPostsShown(true);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPosts([]); // Reset posts when the device size changes
    fetchPosts(0, isSmallerDevice ? 5 : 10);
  }, [isSmallerDevice]);

  const loadMore = async () => {
    const newPostCount = postCount + 85;
    await fetchPosts(postCount, 85);
    setPostCount(newPostCount);
  };

  // const loadLess = () => {
  //   setPostCount(isSmallerDevice ? 5 : 10);
  //   setPosts(posts.slice(0, isSmallerDevice ? 5 : 10));
  //   setAllPostsShown(false);
  // };

  return (
    <Container>
      <PostListContainer>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </PostListContainer>
      {posts.length > 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        {!allPostsShown && (
          <LoadMoreButton onClick={loadMore} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load More'}
          </LoadMoreButton>
        )}
      </div>
      
      
      ) : (
        <div>No posts available</div>
      )}
    </Container>
  );
}
