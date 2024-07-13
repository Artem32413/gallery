import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputBlok } from "../components/input-blok/InputBlok";
export default function titleSearch() {
  useEffect(() => {
    const getTitle = async () => {
      const res = await axios.get(
        "https://test-front.framework.team/paintings",
      );
      setTitle(res.data);
    };
    getTitle();
  }, []);
  const [title, setTitle] = useState([]);
  const [value, setValue] = InputBlok("");
  const filterTitles = title.filter((title) => {
    return title.name.toLowerCase().includes(value.toLowerCase());
  });
  
}
