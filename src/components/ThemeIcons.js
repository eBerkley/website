const Light = ({ position }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`NavBar__ThemeIcon LightIcon NavBar__ThemeIcon--${position}`}
    >
      <title>Light theme icon</title>
      <g id="Rays">
        <path
          d="M195.84,162a1.62,1.62,0,0,1,0-.22v-6.95a1.41,1.41,0,0,1,0-.21,4.16,4.16,0,0,1,8.32,0,1.41,1.41,0,0,1,0,.21v6.95a1.62,1.62,0,0,1,0,.22,4.16,4.16,0,0,1-8.32,0Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M195.84,245.38a1.62,1.62,0,0,1,0-.22v-6.95a1.62,1.62,0,0,1,0-.22,4.16,4.16,0,0,1,8.32,0,1.62,1.62,0,0,1,0,.22v6.95a1.62,1.62,0,0,1,0,.22,4.16,4.16,0,0,1-8.32,0Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M162,204.16h-7.38a4.16,4.16,0,0,1,0-8.32H162a4.16,4.16,0,0,1,0,8.32Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M245.38,204.16H238a4.16,4.16,0,0,1,0-8.32h7.39a4.16,4.16,0,0,1,0,8.32Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M223.92,170.19l.15-.16,4.91-4.91.16-.15a4.17,4.17,0,0,1,5.89,5.89l-.15.16L230,175.93l-.16.15a4.17,4.17,0,0,1-5.89-5.89Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M165,229.14l.15-.16,4.91-4.91.16-.15a4.17,4.17,0,0,1,5.89,5.89l-.15.16L171,234.88l-.16.15a4.17,4.17,0,0,1-5.89-5.89Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M170.19,176.08l-.16-.15L165.12,171l-.15-.16a4.17,4.17,0,0,1,5.89-5.89l.16.15,4.91,4.91.15.16a4.17,4.17,0,0,1-5.89,5.89Z"
          transform="translate(-150.5 -150.5)"
        />
        <path
          d="M229.14,235l-.16-.15L224.07,230l-.15-.16a4.17,4.17,0,0,1,5.89-5.89l.16.15,4.91,4.91.15.16a4.17,4.17,0,0,1-5.89,5.89Z"
          transform="translate(-150.5 -150.5)"
        />
      </g>
      <g id="Middle_Sun" data-name="Middle Sun">
        <circle cx="49.5" cy="49.5" r="30" />
      </g>
      <g id="Shine">
        <path
          className="LightIcon__Class1"
          d="M223.62,197.43a27.83,27.83,0,0,1,.73,5"
          transform="translate(-150.5 -150.5)"
        />
        <path
          className="LightIcon__Class1"
          d="M196.39,176a27.72,27.72,0,0,1,22.41,10.9"
          transform="translate(-150.5 -150.5)"
        />
      </g>
    </svg>
  );
};

const Dark = ({ position }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`NavBar__ThemeIcon DarkIcon NavBar__ThemeIcon--${position}`}
    >
      <title>Dark theme icon</title>
      <g id="DarkBG">
        <circle
          className="DarkIcon__Class1 ThemeIcon__AnimatedFill"
          cx="50"
          cy="50"
          r="50"
        />
      </g>
      <g id="moon">
        <circle className="DarkIcon__Class2" cx="50" cy="50" r="38.5" />
        <circle className="DarkIcon__Class3" cx="50.15" cy="49.7" r="37.95" />
        <circle className="DarkIcon__Class4" cx="50.3" cy="49.41" r="37.41" />
        <circle className="DarkIcon__Class5" cx="50.45" cy="49.11" r="36.86" />
        <circle className="DarkIcon__Class6" cx="50.6" cy="48.82" r="36.32" />
        <circle className="DarkIcon__Class7" cx="50.75" cy="48.52" r="35.77" />
        <circle className="DarkIcon__Class8" cx="50.9" cy="48.22" r="35.23" />
        <circle className="DarkIcon__Class9" cx="51.05" cy="47.93" r="34.68" />
        <circle className="DarkIcon__Class10" cx="51.2" cy="47.63" r="34.14" />
        <circle className="DarkIcon__Class11" cx="51.35" cy="47.33" r="33.59" />
        <circle className="DarkIcon__Class12" cx="51.5" cy="47.04" r="33.05" />
        <circle className="DarkIcon__Class13" cx="51.65" cy="46.74" r="32.5" />
      </g>
      <g id="border">
        <circle
          id="DarkMiddleBorder"
          className="DarkIcon__Class14"
          cx="51.81"
          cy="46.6"
          r="31.76"
        />
        <circle
          id="DarkNegativeSpace"
          className="DarkIcon__Class1 ThemeIcon__AnimatedFill"
          cx="66.66"
          cy="35.87"
          r="26.5"
        />
        <rect
          id="DarkBottomNegativeSpace"
          className="DarkIcon__Class1 ThemeIcon__AnimatedFill"
          x="231.34"
          y="199.59"
          width="14.12"
          height="13.62"
          transform="translate(-221.26 -3.15) rotate(-30)"
        />
        <rect
          id="DarkTopNegativeSpace"
          className="DarkIcon__Class1 ThemeIcon__AnimatedFill"
          x="196.81"
          y="155.26"
          width="10.72"
          height="10.29"
          transform="translate(-204.21 39.93) rotate(-45)"
        />
      </g>
    </svg>
  );
};

const HighContrast = ({ position }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`NavBar__ThemeIcon HighContrastIcon NavBar__ThemeIcon--${position}`}
    >
      <title>High Contrast theme icon</title>
      <g id="Layer_1" data-name="Layer 1">
        <circle className="ThemeIcon__AnimatedFill" cx="50" cy="50" r="49.5" />
        {/* <path
          d="M200,151a49,49,0,1,1-49,49,49.05,49.05,0,0,1,49-49m0-1a50,50,0,1,0,50,50,50,50,0,0,0-50-50Z"
          transform="translate(-150 -150)"
        /> */}
        <circle cx="50" cy="50" r="38.5" />
        <circle className="HighContrast__Class1" cx="50" cy="50" r="37.95" />
        <circle className="HighContrast__Class2" cx="50" cy="50" r="37.41" />
        <circle className="HighContrast__Class3" cx="50" cy="50" r="36.86" />
        <circle className="HighContrast__Class4" cx="50" cy="50" r="36.32" />
        <circle className="HighContrast__Class5" cx="50" cy="50" r="35.77" />
        <circle className="HighContrast__Class6" cx="50" cy="50" r="35.23" />
        <circle className="HighContrast__Class7" cx="50" cy="50" r="34.68" />
        <circle className="HighContrast__Class8" cx="50" cy="50" r="34.14" />
        <circle className="HighContrast__Class9" cx="50" cy="50" r="33.59" />
        <circle
          className="HighContrast__Class10 ThemeIcon__AnimatedFill"
          cx="50"
          cy="50"
          r="33.05"
        />
        <circle className="HighContrast__Class11" cx="50" cy="50" r="32.5" />
        <circle className="HighContrast__Class12" cx="50" cy="50" r="32.5" />
        <circle
          className="HighContrast__Class13"
          cx="66.84"
          cy="35.76"
          r="27.5"
        />
        <rect
          id="HighContrastBottomNegativeSpace"
          className="ThemeIcon__AnimatedFill"
          x="231.01"
          y="203.19"
          width="14.12"
          height="13.62"
          transform="translate(-223.1 -2.83) rotate(-30)"
        />
        <rect
          id="HighContrastTopNegativeSpace"
          className="ThemeIcon__AnimatedFill"
          x="191.48"
          y="156.86"
          width="10.72"
          height="10.29"
          transform="translate(-206.9 36.63) rotate(-45)"
        />
      </g>
      <g id="shades">
        <path
          id="lens"
          className="HighContrast__Class13"
          d="M166.86,209.4a10.3,10.3,0,0,0,5.4,8.69,8.42,8.42,0,0,0,8.12-.74,9.72,9.72,0,0,0,2.08-11.53,3,3,0,0,1,1.17-2.06,2.29,2.29,0,0,1,2.66.07,6.61,6.61,0,0,0,10.63,4.51c3.25-2.21,3.24-6.22,3.24-7.07a10.13,10.13,0,0,0-3.31-7.24Q181.87,201.73,166.86,209.4Z"
          transform="translate(-150 -150)"
        />
        <polyline
          id="rim"
          className="HighContrast__Class14"
          points="12.32 62.06 14.04 59.29 19.09 58.14"
        />
        <path
          className="HighContrast__Class13"
          d="M277.13,205.39"
          transform="translate(-150 -150)"
        />
      </g>
    </svg>
  );
};

export { Light, Dark, HighContrast };
