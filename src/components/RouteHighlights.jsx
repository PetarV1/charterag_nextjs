import React from "react";
import Grid from "@/components/Grid";

const RouteHighlights = ({ destination }) => {
  return (
    <section className="route-highlights pt-[128px] container relative z-10">
      <h3 className="text-center text-[32px] leading-[105%] tracking-[-0.64px] text-greenVogue950">
        Route Highlights
      </h3>
      <Grid routeHighlights={destination.routeHighlights} />
    </section>
  );
};

export default RouteHighlights;
