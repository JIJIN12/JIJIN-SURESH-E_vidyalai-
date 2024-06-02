import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const PostContainer = styled.div(() => ({
  width: '300px',
  margin: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
}));

const CarouselContainer = styled.div(() => ({
  position: 'relative',
}));

const Carousel = styled.div(() => ({
  display: 'flex',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  position: 'relative',
}));

const CarouselItem = styled.div(() => ({
  flex: '0 0 auto',
  scrollSnapAlign: 'start',
}));

const Image = styled.img(() => ({
  width: '280px',
  height: 'auto',
  maxHeight: '300px',
  padding: '10px',
}));

const Content = styled.div(() => ({
  padding: '10px',
  '& > h2': {
    marginBottom: '16px',
  },
}));

const Button = styled.button(() => ({
  position: 'absolute',
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  color: '#000',
  fontSize: '20px',
  cursor: 'pointer',
  height: '50px',
  marginBottom: '40%',
}));

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const Post = ({ post }) => {
  const carouselRef = useRef(null);
  const [postdata, set_postdata] = useState([]);
  const [userdata, set_userdata] = useState([]);
  const [noImagesMessage, setNoImagesMessage] = useState('');
  console.log(noImagesMessage);

  // console.log(userdata);
  console.log(postdata);
  const mergedArray = userdata.map(item1 => {
    const matchingItem = postdata.find(item2 => item2.id === item1.id);
    return { ...item1, ...matchingItem };
  });
  console.log('mergedArray', mergedArray);
  useEffect(() => {
    try {
      axios
      .get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(Response => {
        // console.log(Response.data);
        set_postdata(Response.data);
      });
    } catch (error) {
      console.log(error);
    }
    
  }, []);
  // const handleNextClick = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: -300,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handlePrevClick = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: 300,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  // const handleNextClick = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const imageWidth = carousel.children[0].offsetWidth; // dynamically calculate image width
  //     const visibleImages = Math.floor(carousel.offsetWidth / imageWidth);
  //     const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

  //     const newScrollLeft = Math.min(carousel.scrollLeft + imageWidth * visibleImages, maxScrollLeft);
  //     console.log(newScrollLeft);

  //     carousel.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handlePrevClick = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const imageWidth = carousel.children[0].offsetWidth; // dynamically calculate image width
  //     const visibleImages = Math.floor(carousel.offsetWidth / imageWidth);
  //     const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

  //     const newScrollLeft = Math.max(carousel.scrollLeft - imageWidth * visibleImages, 0);
  // console.log(newScrollLeft);
  //     carousel.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  // const handlePrevClick = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const imageWidth = 300; // assuming each image is 300px wide

  //     // Calculate new scroll position and ensure it's a multiple of 300
  //     let newScrollLeft = carousel.scrollLeft - imageWidth;
  //     newScrollLeft = Math.max(newScrollLeft - (newScrollLeft % imageWidth), 0);

  //     carousel.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const handleNextClick = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const imageWidth = 300; // assuming each image is 300px wide
  //     const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

  //     // Calculate new scroll position and ensure it's a multiple of 300
  //     let newScrollLeft = carousel.scrollLeft + imageWidth;
  //     newScrollLeft = Math.min(newScrollLeft - (newScrollLeft % imageWidth), maxScrollLeft);

  //     carousel.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  // const handlePrevClick = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const images = carousel.children;
  // console.log(images.length);
  //     if (images.length === 0) {
  //       setNoImagesMessage('No images to slide.');
  //       return;
  //     }

  //     const imageWidth = 300; // assuming each image is 300px wide

  //     // Calculate new scroll position and ensure it's a multiple of 300
  //     let newScrollLeft = carousel.scrollLeft - imageWidth;
  //     newScrollLeft = Math.max(newScrollLeft - (newScrollLeft % imageWidth), 0);

  //     carousel.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth',
  //     });
  //     setNoImagesMessage(''); // Clear the message if images are found
  //   }
  // };

  // const handleNextClick = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const images = carousel.children;

  //     if (images.length === 0) {
  //       setNoImagesMessage('No images to slide.');
  //       return;
  //     }

  //     const imageWidth = 300; // assuming each image is 300px wide
  //     const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;

  //     // Calculate new scroll position and ensure it's a multiple of 300
  //     let newScrollLeft = carousel.scrollLeft + imageWidth;
  //     newScrollLeft = Math.min(newScrollLeft - (newScrollLeft % imageWidth), maxScrollLeft);

  //     carousel.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth',
  //     });
  //     setNoImagesMessage(''); // Clear the message if images are found
  //   }
  // };
  useEffect(() => {
    axios.get('/api/v1/users').then(Response => {
      // console.log(Response);
      set_userdata(Response.data);
    });
  }, []);
  const handlePrevClick = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const images = carousel.children;

      console.log(images.length);
      if (images.length === 0) {
        setNoImagesMessage('No images to slide.');
        return;
      }

      const imageWidth = 300; // assuming each image is 300px wide
      const maxScrollLeft = (images.length - 1) * imageWidth; // maximum scroll position

      // Calculate new scroll position and ensure it's a multiple of 300
      let newScrollLeft = carousel.scrollLeft - imageWidth;
      newScrollLeft = Math.max(newScrollLeft - (newScrollLeft % imageWidth), 0);

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Check if the carousel is at the beginning or end
      if (newScrollLeft === 0) {
        setNoImagesMessage('Reached the start of the carousel.');
      } else if (newScrollLeft === maxScrollLeft) {
        setNoImagesMessage('Reached the end of the carousel.');
      } else {
        setNoImagesMessage(''); // Clear the message if not at the ends
      }
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const images = carousel.children;

      console.log(images.length);
      if (images.length === 0) {
        setNoImagesMessage('No images to slide.');
        return;
      }

      const imageWidth = 300; // assuming each image is 300px wide
      const maxScrollLeft = (images.length - 1) * imageWidth; // maximum scroll position

      // Calculate new scroll position and ensure it's a multiple of 300
      let newScrollLeft = carousel.scrollLeft + imageWidth;
      newScrollLeft = Math.min(
        newScrollLeft - (newScrollLeft % imageWidth),
        maxScrollLeft,
      );

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Check if the carousel is at the beginning or end
      if (newScrollLeft === 0) {
        setNoImagesMessage('Reached the start of the carousel.');
      } else if (newScrollLeft === maxScrollLeft) {
        setNoImagesMessage('Reached the end of the carousel.');
      } else {
        setNoImagesMessage(''); // Clear the message if not at the ends
      }
    }
  };

  // console.log(post);
  return (
    <PostContainer>
      <CarouselContainer>
        <Carousel ref={carouselRef}>
          {mergedArray.map((image, index) => {
            // Assuming name contains both first and last name
            const [firstName, lastName] = image.name.split(' ');
            const firstInitial = firstName ? firstName.charAt(0) : '';
            const lastInitial = lastName ? lastName.charAt(0) : '';

            return (
              <div key={index}>
                <CarouselItem>
                  <div style={{ display: 'flex', padding: '6px 8px' }}>
                    <div
                      style={{
                        background: 'grey',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '5px 7px',
                        fontWeight: '500',
                        fontSize: '2rem',
                      }}
                    >
                      {firstInitial} {lastInitial}
                    </div>
                    <div style={{ margin: '.2rem .5rem' }}>
                      <p style={{ fontWeight: '700', fontSize: '1rem' }}>
                        {image.name}
                      </p>
                      <p style={{ fontSize: '.9rem' }}>{image.email}</p>
                    </div>
                  </div>
                  <Image src={image.url} alt={post.title} />
                </CarouselItem>
              </div>
            );
          })}
        </Carousel>
        <PrevButton onClick={handlePrevClick}>&#10094;</PrevButton>
        <NextButton onClick={handleNextClick}>&#10095;</NextButton>
      </CarouselContainer>
      <Content>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Content>
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.any,
    images: PropTypes.shape({
      map: PropTypes.func,
    }),
    title: PropTypes.any,

  }),
};
export default Post;
