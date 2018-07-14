import React from "react";
import WeAreCarousel from "../carousel/WeAreCarousel";

const SubHeaderSection = props => {
  const { item } = props;

  return (
    <div className="flex-column flex Big-section" id={item.id}>
      <WeAreCarousel weAreContent={item.content} title={item.title} />
    </div>
  );
};
export default SubHeaderSection;