import React, { useState } from "react";
import axios from "axios";
import CardForm from "./CardForm";
import CardTable from "./CardTable";
import {
  Typography,
  Stack,
  Paper,
  Modal,
} from "@mui/material";
import HelpCenterTwoToneIcon from "@mui/icons-material/HelpCenterTwoTone";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";


// axios.defaults.baseURL = "http://54.225.140.11/api/";
axios.defaults.baseURL = "http://localhost:8000/api/";



// modal styling temporarily
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export default function CardDisplay() {
  // General app state
  const [cardName, setCardName] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Stack
        direction={"column"}
        spacing={2}
        justifyContent="center"
        alignItems={"center"}
      >
        <Paper
          sx={{
            padding: 2,
            margin: 2,
            width: "400px",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
          >
            <Typography
              variant="h4"
              component="h1"
              color="primary"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              snapcaster
            </Typography>
            <HelpCenterTwoToneIcon
              color="primary"
              sx={{ "&:hover": { color: "white" } }}
              onClick={handleOpen}
            />
          </Stack>

          <CardForm
            setLoading={setLoading}
            setData={setData}
            setCardName={setCardName}
            cardName={cardName}
          />
          <Container 
            sx={{
              paddingTop: 2,
            }}
          >
                      <Link to="bulk"><Typography sx={{
                        textDecoration: "underline",
                        color: "#70BDF9"
                    }} >Search for multiple cards</Typography></Link>

          </Container>
                    

        </Paper>
        <div style={{ height: 400, width: "100%", maxWidth: "1200px" }}>
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flexGrow: 1 }}>
              {loading ? <p>Loading...</p> : data && <CardTable data={data} />}
            </div>
          </div>
        </div>
      </Stack>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            What is snapcaster?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            snapcaster was created to help Canadian MTG enthusiasts find the cheapest card
            prices from Canadian vendors. All prices are in CAD. Currently, we support Fusion Gaming, HouseofCards, Gauntlet Games,
            401games, and WizardsTower. If you would like to see another site indexed on snapcaster, or encounter
            any bugs, email me at epplerdev@gmail.com.
          </Typography>

            </Box>
          </Modal>


    </div>
  );
}