import React from 'react'
// import styled from 'styled-components';

import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'

import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from '../assets/overlay/Wrapper'
import Title from '../assets/overlay/Title'
import Subtitle from '../assets/overlay/Subtitle'

function Slider() {
  return (
    <>
<HeroSlider
    height="90vh"
    controller={{
      initialSlide: 1,
      slidingDuration: 4500,
      slidingDelay: 200
    }}
    autoplay={{
      autoplayDuration: 4500,
      autoplayDebounce: 100
    }}
    >
      <Overlay>
      <Wrapper>
          <Title>WELCOME USERS</Title>
          <Subtitle>
            This Website Is Quite Bootstrapped If I Say So Myself
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Aviation - Aiport Terminal"
        background={{
          backgroundImageSrc: img1
        }}
      />

      <Slide
        shouldRenderMask
        label="Nissan - Skyline R34"
        background={{
          backgroundImageSrc: img2
        }}
      />

      <Slide
        shouldRenderMask
        label="Surfing - Backhand Snap"
        background={{
          backgroundImageSrc: img3
        }}
      />

      <Slide
        shouldRenderMask
        label="Fighter Jet - Navy F35"
        background={{
          backgroundImageSrc: img4
        }}
      />

        <Slide
        shouldRenderMask
        label="Football - Stadium"
        background={{
          backgroundImageSrc: img5
        }}
      />

      <MenuNav />
    </HeroSlider>
    </>
  )
}

export default Slider