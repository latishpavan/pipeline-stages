import "./styles.css";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CircularProgress from "@material-ui/core/CircularProgress";

const PipelineStage = styled.div`
  width: 200px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  border-radius: 100px;
  background-color: white;
  position: relative;
  margin-right: 40px;

  &::after {
    content: " ";
    display: block;
    position: absolute;
    height: 3px;
    background: #dbdbdb;
    width: 40px;
    left: 100%;
    top: calc(50% - 2px);
  }
`;

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PipelineStage>
        <h5>Merge to Master</h5>
        {/* <CircularProgress size="20px" /> */}
        <CheckCircleOutlineIcon style={{ color: "green" }} />
      </PipelineStage>
      <PipelineStage>
        <h5>Recreate Develop</h5>
        <CircularProgress size="20px" />
        {/* <CheckCircleOutlineIcon style={{ color: "green" }} /> */}
      </PipelineStage>
    </div>
  );
}
