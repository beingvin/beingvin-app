import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./style.css";

function TextShpere() {
  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const texts = [
          '3D', 'TagCloud', 'JavaScript',
          'CSS3', 'Animation', 'Interactive',
          'Mouse', 'Rolling', 'Sphere',
          '6KB', 'v2.x',
      ];
      const options = {};
      
      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
    </div>
    
  );
}

export default TextShpere;
