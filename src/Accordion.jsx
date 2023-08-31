import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="max-w-xs m-8 mb-12 lg:max-w-sm lg:mr-24 lg:mb-24 lg:ml-64">
      <Accordion
        className="rounded-t-lg"
        sx={{ border: "0px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "0",
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            className="question"
            sx={{
              fontWeight: expanded === "panel1" ? "bold" : "normal",
              color: expanded === "panel1" ? "#1d1e35" : "#4a4b5e",
              transition: "color 0.3s",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": expanded !== "panel1" ? { color: "#f47c57" } : {},
              },
            }}
          >
            How many team members can I invite?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#787887",
            }}
          >
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        sx={{ border: "0px" }}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "0",
          }}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography
            className="question"
            sx={{
              fontWeight: expanded === "panel2" ? "bold" : "normal",
              color: expanded === "panel2" ? "#1d1e35" : "#4a4b5e",
              transition: "color 0.3s",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": expanded !== "panel2" ? { color: "#f47c57" } : {},
              },
            }}
          >
            What is the maximum file upload size?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#787887",
            }}
          >
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        sx={{ border: "0px" }}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "0",
          }}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography
            className="question"
            sx={{
              fontWeight: expanded === "panel3" ? "bold" : "normal",
              color: expanded === "panel3" ? "#1d1e35" : "#4a4b5e",
              transition: "color 0.3s",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": expanded !== "panel3" ? { color: "#f47c57" } : {},
              },
            }}
          >
            How do I reset my password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#787887",
            }}
          >
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        sx={{ border: "0px" }}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "0",
          }}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography
            className="question"
            sx={{
              fontWeight: expanded === "panel4" ? "bold" : "normal",
              color: expanded === "panel4" ? "#1d1e35" : "#4a4b5e",
              transition: "color 0.3s",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": expanded !== "panel4" ? { color: "#f47c57" } : {},
              },
            }}
          >
            Can I cancel my subscription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#787887",
            }}
          >
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="rounded-b-lg"
        sx={{ border: "0px" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "0",
          }}
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <Typography
            className="question"
            sx={{
              fontWeight: expanded === "panel5" ? "bold" : "normal",
              color: expanded === "panel5" ? "#1d1e35" : "#4a4b5e",
              transition: "color 0.3s",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": expanded !== "panel5" ? { color: "#f47c57" } : {},
              },
            }}
          >
            Do you provide additional support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#787887",
            }}
          >
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
