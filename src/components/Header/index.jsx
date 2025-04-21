import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./components/Logo";
import arrow from "../../assets/icons/arrow-down.png";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navLinks = [
    { href: "#skills", label: "Skills & Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        backdropFilter: "blur(5px)",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "xl",
          mx: "auto",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <a href="/" aria-label="Home" style={{ display: "inline-block" }}>
          <Logo />
        </a>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleMenuClose}
              sx={{ mt: "45px", height: "300px" }}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(10, 25, 47, 0.98)",
                  backdropFilter: "blur(10px)",
                  minWidth: "180px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.href}
                  onClick={handleMenuClose}
                  sx={{
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                    ...(link.isButton && {
                      justifyContent: "center",
                      my: 1,
                      "&:hover": {
                        backgroundColor: "rgba(251, 146, 60, 0.1)",
                      },
                    }),
                  }}
                >
                  <a
                    href={link.href}
                    style={{
                      width: "100%",
                      textDecoration: "none",
                      color: link.isButton ? "#fb923c" : "white",
                      ...(link.isButton && {
                        border: "1px solid  #0f2027",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        textAlign: "center",
                      }),
                    }}
                  >
                    {link.label}
                     <button
                    className="flex items-center justify-center border border-[#B946DF] mt-[-30px] gap-2 
                     w-[clamp(100px,13vw,300px)] xs:h-[clamp(40px,7vh,53px)] font-['Poppins']  
                     h-[clamp(20px,7vh,53px)] px-4 py-2 xs:text-[clamp(14px,2vw,24px)]   
                     text-[clamp(12px,1vw,20px)]  font-bold text-white rounded-[40px] 
                     bg-gradient-to-r from-[#0A0A14] to-[#0A0A14] hover:from-[#3D05DD] hover:to-[#EFA4F2] 
                     transition-all duration-400 ease-in-out whitespace-nowrap"
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[clamp(10px,1.5vw,13px)] h-[clamp(10px,1.5vw,13px)] transition-transform duration-300 hover:rotate-[-90deg] hover:-translate-y-0.5"
                    />
                  </button>
                  </a>
                 
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                variant={link.isButton ? "outlined" : "text"}
                sx={{
                  color: link.isButton ? " white" : "white",
                  borderColor: "gray",

                  textTransform: "none",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
