import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function TrendingList({ trendingList }) {
  return (
    <>
      <h1>trending</h1>
      {trendingList.map((t) => (
        <p># {t.name}</p>
      ))}
    </>
  );
}
