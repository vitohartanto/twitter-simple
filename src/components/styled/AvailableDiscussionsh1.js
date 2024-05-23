/** @jsxImportSource @emotion/react */
import styled from 'styled-components';
import tw from 'twin.macro';

const AvailableDiscussions = styled.h1`
  ${tw`mb-2
  font-medium
  text-xl
  px-4
  py-2
  inline
  backdrop-blur-[2px]
  border-[1px_solid_rgba(255,255,255,0.18)]
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
  rounded-[18px]
  bg-[rgba(25,25,25,0.90)]`}

  color: ${(props) => props.color || '#FFFFFF'};
`;

export default AvailableDiscussions;
