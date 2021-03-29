import styled from "@emotion/styled";
import CategoryBanner from "../components/Category/CategoryBanner";
import SideBar from "../components/Category/SideBar";
import PostContainer from "../components/Landing/PostContainer";
import Navbar from "../components/UI/Navbar";

export default function Category() {
  return (
    <div>
      <StyledDiv>
        <SideBar />
        <CategoryBody>
          <CategoryBanner />
          <PostContainer />
        </CategoryBody>
      </StyledDiv>
    </div>
  );
}
const StyledDiv = styled.div`
  display: flex;
`;
const CategoryBody = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  padding: 40px;
  padding-top: 0px;
`;
