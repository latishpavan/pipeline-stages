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
`;

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PipelineStage className="after">
        <h5>Merge to Master</h5>
        {/* <CircularProgress size="20px" /> */}
        <CheckCircleOutlineIcon style={{ color: "green" }} />
      </PipelineStage>
      <PipelineStage className="before">
        <h5>Recreate Develop</h5>
        <CircularProgress size="20px" />
        {/* <CheckCircleOutlineIcon style={{ color: "green" }} /> */}
      </PipelineStage>
    </div>
  );
}
