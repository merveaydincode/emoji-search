const Avatar = (props) => {
    const sizeClass = props.size === "small" ? "h-8 w-8" : "h-20 w-20";
  
    return (
      <img
        src={props.src}
        alt={props.alt}
        className={`${sizeClass} rounded-full`}
      />
    );
  };
  
  export default Avatar;
  