// import styled from '@emotion/styled';
// import React, { useRef, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
// import { CameraIcon } from '../..';
// // import { useAlert } from '../../../hooks';
// import { AvatarProps } from '../../../interfaces/general.interface';
// import { getSize } from '../../../utils';
// // import { updateProfileImageAction } from '../../../state-management/actions/user.actions';
// // import { getSize } from '../../../utils';
// // import { CameraIcon } from '../../icons';
// import userImg from './../../../assets/images/user.png';

// const AvatarMd = styled.img<any>`
//   ${({ size }) => `
//  width: ${size};
//  height: ${size};
//   `};
//   cursor: pointer;
//   border-radius: 50%;
//   object-fix: contain;
// `;

// const Wrapper = styled.span<any>`
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Camera = styled(CameraIcon)`
//   position: absolute;
// `;
// const HashTagWrapper = styled.div<any>`
//   ${({ theme, size }) => `
//   border: 1px solid ${theme.colors.primary};
//   border-radius: 50%;
//   width: ${size};
//   height: ${size};
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   `};
// `;

// const ImageInput = styled.input<any>`
//   display: none;
// `;
// const Avatar = ({
//   src = userImg,
//   size = 'md',
//   editable = false,
//   tag = '',
//   ishashtag = false,
//   path,
// }: AvatarProps): JSX.Element => {
//   const [image, setImage] = useState(src);
//   const _size = getSize(size);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   // const alert = useAlert();
//   const handleRedirect = () => {
//     history && history.push(path);
//     handleImageSelection();
//   };
//   const imageInputRef: any = useRef();
//   const handleImageSelection = () => {
//     if (!editable) return;
//     imageInputRef.current && imageInputRef.current.click();
//   };
//   const processImageChange = (event: any) => {
//     const images = event.target.files;
//     const imageReader = new FileReader();
//     imageReader.readAsDataURL(images[0]);
//     imageReader.onload = (img: any) => {
//       updateImageHandler(images[0]);
//       const newImg = img.target.result;
//       setImage(newImg);
//     };
//   };
//   const updateImageHandler = (image: any) => {
//     const confirm = window.confirm('Your profile image will be updated with the select one! OK?');
//     if (!confirm) return setImage(src);
//     const formData = new FormData();
//     formData.append('picture', image);
//     // dispatch(
//     //   updateProfileImageAction(formData, (err: any, data: any) => {
//     //     if (err) alert.error(err);
//     //     else alert.success('Profile upload successul');
//     //   }),
//     // );
//   };
//   return (
//     <Wrapper onClick={handleRedirect}>
//       <ImageInput
//         onChange={processImageChange}
//         ref={imageInputRef}
//         type="file"
//         name="new_image"
//         id="new_image"
//         accept="image/*"
//       />
//       {ishashtag ? (
//         <HashTagWrapper size={_size}>#{tag}</HashTagWrapper>
//       ) : (
//         <>
//           {editable && <Camera />}
//           <AvatarMd src={image} size={_size} />
//         </>
//       )}
//     </Wrapper>
//   );
// };

export default {};
