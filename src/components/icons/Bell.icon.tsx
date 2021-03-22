import React from 'react';
import { Svg } from './a-style';

const BellSvg = (props: any) => {
  return (
    <Svg width="17" height="18" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 15C20.4696 15 19.9609 14.7893 19.5858 14.4142C19.2107 14.0391 19 13.5304 19 13V8C19 5.87827 18.1571 3.84344 16.6569 2.34315C15.1566 0.842855 13.1217 0 11 0C8.87827 0 6.84344 0.842855 5.34315 2.34315C3.84285 3.84344 3 5.87827 3 8V13C3 13.5304 2.78929 14.0391 2.41421 14.4142C2.03914 14.7893 1.53043 15 1 15C0.447715 15 0 15.4477 0 16C0 16.5523 0.447715 17 1 17H21V15ZM8.76823 19.135C9.24595 18.8579 9.85788 19.0205 10.135 19.4982C10.2229 19.6498 10.3491 19.7756 10.5009 19.863C10.6527 19.9504 10.8248 19.9965 11 19.9965C11.1752 19.9965 11.3473 19.9504 11.4991 19.863C11.6509 19.7756 11.7771 19.6498 11.865 19.4982C12.1421 19.0205 12.754 18.8579 13.2318 19.135C13.7095 19.4121 13.8721 20.024 13.595 20.5018C13.3313 20.9564 12.9528 21.3337 12.4973 21.5961C12.0419 21.8584 11.5256 21.9965 11 21.9965C10.4744 21.9965 9.95809 21.8584 9.50266 21.5961C9.04724 21.3337 8.66872 20.9564 8.405 20.5018C8.12788 20.024 8.2905 19.4121 8.76823 19.135Z"
        fill="white"
      />
    </Svg>
  );
};

export default BellSvg;