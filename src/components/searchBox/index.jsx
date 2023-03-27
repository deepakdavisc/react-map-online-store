/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SearchBoxContainer = css({
  width: "500px",
  height: "4rem",
  border: "solid 2px #000000",
  borderRadius: "50px",
  margin: "0 auto",
  backgroundColor: "#FFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

const InputStyles = css({
  width: "60%",
  marginLeft: "25px",
  height: "60px",
  border: "transparent",
  fontSize: "1.5rem",
  outline: "transparent",
});

const ButtonStyles = css({
  backgroundColor: "#000",
  color: "#FFF",
  width: "25%",
  padding: "2px 0",
  height: "50px",
  borderRadius: "50px",
});

export const SearchBox = () => {
  return (
    <div style={{ padding: "2rem 0" }}>
      <div css={SearchBoxContainer}>
        <input
          css={InputStyles}
          type="text"
          name="zipcode"
          id="ZipCode"
          maxLength={5}
          placeholder="Search nearby stores"
        />
        <button name="searchBtn" id="searchBtn" css={ButtonStyles}>
          Search
        </button>
      </div>
    </div>
  );
};
