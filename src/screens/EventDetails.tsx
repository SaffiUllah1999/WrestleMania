import React from "react";
import { useLocation } from "react-router-dom";

export default function EventDetails() {
  const location = useLocation();
  const { key, anotherKey } = location.state || {}; // Safely access the passed data
  return <div>EventDetails</div>;
}
