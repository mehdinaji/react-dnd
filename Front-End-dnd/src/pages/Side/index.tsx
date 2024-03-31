import React from "react";
import { SplitView } from "../../components/SplitView";

const Tickets = () => {

  return (

    <SplitView
      left=
      {
        <div className="left ielts-scrollbar">
          {Array.from(Array(6)).map((_, index) => (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus turpis massa tincidunt dui ut ornare lectus. Cras sed felis eget velit aliquet sagittis. Velit ut tortor pretium viverra suspendisse potenti. Sagittis purus sit amet volutpat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Viverra maecenas accumsan lacus vel facilisis. Sed odio morbi quis commodo odio aenean. Tempor id eu nisl nunc mi ipsum faucibus. Sit amet dictum sit amet justo donec. Faucibus purus in massa tempor. Ornare aenean euismod elementum nisi quis. Non odio euismod lacinia at quis. Nunc sed velit dignissim sodales ut eu sem integer.
            </div>
          ))}
        </div>
      }
      right=
      {
        <div className="left ielts-scrollbar">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus turpis massa tincidunt dui ut ornare lectus. Cras sed felis eget velit aliquet sagittis. Velit ut tortor pretium viverra suspendisse potenti. Sagittis purus sit amet volutpat. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Viverra maecenas accumsan lacus vel facilisis. Sed odio morbi quis commodo odio aenean. Tempor id eu nisl nunc mi ipsum faucibus. Sit amet dictum sit amet justo donec. Faucibus purus in massa tempor. Ornare aenean euismod elementum nisi quis. Non odio euismod lacinia at quis. Nunc sed velit dignissim sodales ut eu sem integer.
        </div>
      }
    />
  );
};

export default Tickets;