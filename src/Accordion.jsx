import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { data } from "./data";

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
      {data.map((item) => {
        return (
          <Accordion
            key={item.title}
            className="rounded-t-lg"
            sx={{ border: "0px" }}
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "white",
                borderBottom: "1px solid #e5e7eb",
                padding: "0",
              }}
              aria-controls={`${item.panel}d-content`}
              id={`${item.panel}d-header`}
            >
              <Typography
                className="question"
                sx={{
                  fontWeight: expanded === item.panel ? "bold" : "normal",
                  color: expanded === item.panel ? "#1d1e35" : "#4a4b5e",
                  transition: "color 0.3s",
                  "@media (hover: hover) and (pointer: fine)": {
                    "&:hover":
                      expanded !== item.panel ? { color: "#f47c57" } : {},
                  },
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[#787887]">
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
