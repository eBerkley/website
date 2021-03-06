const GithubButton = () => {
  return (
    <a className="GithubLink" href="https://github.com/eBerkley/website">
      <div className="GithubBackground">
        <svg
          id="GithubSVG"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 350 "
          aria-labelledby="SourceCode"
        >
          <path
            d="M155.57,405.18c0,2.61,3.51,3.55,5.12,3.55s5-1.23,5-3.6-1.62-3.6-4.94-3.6C158.23,401.53,155.57,402.57,155.57,405.18Zm-20.78-4.55c-.7,2,1.3,4.3,4.3,4.9,2.6,1,5.6,0,6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2,2.3Zm44.2-1.7c-2.9.7-4.9,2.6-4.6,4.9.3,2,2.9,3.3,5.9,2.6s4.9-2.6,4.6-4.6S181.89,398.63,179,398.93Zm-3.84,100s11.64-5.6,11.64-12.1c0-6.2-.3-40.4-.3-61.4,0,0-70,15-84.7-29.8,0,0-11.4-29.1-27.8-36.6,0,0-22.9-15.7,1.6-15.4,0,0,24.9,2,38.6,25.8,21.9,38.6,58.6,27.5,72.9,20.9,2.3-16,8.8-27.1,16-33.7-55.9-6.2-112.3-14.3-112.3-110.5,0-27.5,7.6-41.3,23.6-58.9-2.6-6.5-11.1-33.3,2.6-67.9,20.9-6.5,69,27,69,27a236.24,236.24,0,0,1,125.6,0s48.1-33.6,69-27c13.7,34.7,5.2,61.4,2.6,67.9,16,17.7,25.8,31.5,25.8,58.9,0,96.5-58.9,104.2-114.8,110.5,9.2,7.9,17,22.9,17,46.4,0,33.7-.3,75.4-.3,83.6,0,6.5,13.49,12.1,13.49,12.1M97.19,360.63c-1.3,1-1,3.3.7,5.2,1.6,1.6,3.9,2.3,5.2,1,1.3-1,1-3.3-.7-5.2C100.79,360,98.49,359.33,97.19,360.63Zm-10.8-8.1c-.7,1.3.3,2.9,2.3,3.9,1.6,1,3.6.7,4.3-.7s-.3-2.9-2.3-3.9C88.69,351.23,87.09,351.53,86.39,352.53Zm32.4,35.6c-1.6,1.3-1,4.3,1.3,6.2,2.3,2.3,5.2,2.6,6.5,1,1.3-1.3.7-4.3-1.3-6.2C123.09,386.83,120.09,386.53,118.79,388.13Zm-11.4-14.7c-1.6,1-1.6,3.6,0,5.9s4.3,3.3,5.6,2.3c1.6-1.3,1.6-3.9,0-6.2-1.4-2.3-4-3.3-5.6-2Z"
            transform="translate(-64.27 -118.47)"
          />
        </svg>
        <span id="SourceCode" className="GithubSVGText">
          View Source Code
        </span>
      </div>
    </a>
  );
};

export default GithubButton;
