import React from "react";
import "./objectDetails.css";

function ObjectDetails({ styleClass }) {
  return (
    <div className="object-details">
      <svg
        className={`object-details__icon object-details__icon--${styleClass}`}
        viewBox="0 0 16.667 11.667"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M15.83 4.81L15.83 2.5C15.83 1.12 14.7 0 13.33 0L10 0C9.35 0 8.77 0.25 8.33 0.65C7.89 0.25 7.3 0 6.66 0L3.33 0C1.95 0 0.83 1.12 0.83 2.5L0.83 4.81C0.32 5.27 0 5.93 0 6.66L0 11.66L1.66 11.66L1.66 10L15 10L15 11.66L16.66 11.66L16.66 6.66C16.66 5.93 16.34 5.27 15.83 4.81ZM10 1.66L13.33 1.66C13.79 1.66 14.16 2.04 14.16 2.5L14.16 4.16L9.16 4.16L9.16 2.5C9.16 2.04 9.54 1.66 10 1.66ZM2.5 2.5C2.5 2.04 2.87 1.66 3.33 1.66L6.66 1.66C7.12 1.66 7.5 2.04 7.5 2.5L7.5 4.16L2.5 4.16L2.5 2.5ZM1.66 8.33L1.66 6.66C1.66 6.2 2.04 5.83 2.5 5.83L14.16 5.83C14.62 5.83 15 6.2 15 6.66L15 8.33L1.66 8.33Z"
        />
      </svg>
      <p className={`object-details__text object-details__text--${styleClass}`}>3+1</p>
      <svg
        className={`object-details__icon object-details__icon--${styleClass}`}
        viewBox="0 0 16.667 15.833"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M15.83 5.83L4.16 5.83L4.16 3.33C4.16 2.41 4.91 1.66 5.83 1.66C6.75 1.66 7.5 2.41 7.5 3.33L9.16 3.33C9.16 1.49 7.67 0 5.83 0C3.99 0 2.5 1.49 2.5 3.33L2.5 5.83L0.83 5.83C0.61 5.83 0.4 5.92 0.24 6.07C0.08 6.23 0 6.44 0 6.66L0 8.33C0 10.5 1.39 12.35 3.33 13.04L3.33 15.83L5 15.83L5 13.33L11.66 13.33L11.66 15.83L13.33 15.83L13.33 13.04C15.27 12.35 16.66 10.5 16.66 8.33L16.66 6.66C16.66 6.44 16.57 6.23 16.42 6.07C16.26 5.92 16.05 5.83 15.83 5.83ZM15 8.33C15 10.17 13.5 11.66 11.66 11.66L5 11.66C3.16 11.66 1.66 10.17 1.66 8.33L1.66 7.5L15 7.5L15 8.33Z"
        />
      </svg>
      <p className={`object-details__text object-details__text--${styleClass}`}>2</p>
      <svg
        className={`object-details__icon object-details__icon--${styleClass}`}
        id="svg985"
        viewBox="0 0 12.7 12.7"
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <g id="layer1" transform="translate(0 -284.3)">
          <path
            id="rect1048"
            d="m1.9821109 284.63603c-.1461214.001-.2634165.12105-.2619983.26717v.57412c.00765.34504.5215069.34504.5291666 0v-.0212c3.3656032.00053 6.7757358.00021 9.6583238-.002v.0227c0 .35313.529685.35313.529685 0v-.57412c.0016-.14918-.1206-.27007-.269751-.26717-.145311.003-.26136.12184-.259934.26717v.0253c-3.216897-.003-6.4394162-.002-9.6583238-.002v-.0238c0-.19827-.1355936-.26706-.2671683-.26706zm.032557 1.43919c-.210267 0-.2945686.12791-.2945686.28881-.00238 3.33187 0 6.69286 0 10.00818 0 .15501.1349508.2868.289388.2868h10.1130757c.18423.0388.348877-.12182.314712-.30696v-9.98802c0-.15401-.134954-.28887-.289388-.28887-3.371583-.008-6.7550985.00006-10.1332191.00006zm-1.48362992 0c-.3607858-.008-.3607858.53726 0 .52916h.02585c.00913 3.31444-.00876 6.68616.0005292 9.52551-.01778-.00018-.037634 0-.053745 0-.3446304.0255-.3180345.53936.02739.52917h.58187432c.3607859.008.3607859-.53727 0-.52917h-.0289375c.00331-3.31914.00185-6.68293.0005291-9.52551h.028422c.3607859.008.3607859-.53726 0-.52916zm2.09909572.52916h8.3560783l-.0041.64648c-.0016.14612.115358.26596.261482.26768l.664041.005v8.23877zm8.8847293 0h.39274v.38913l-.396357-.002zm-9.2655838.36742 8.1886478 8.08323c-.379137.27529-.4800018.66378-.4935114 1.07487h-6.7690947v-.65061c-.0005292-.14531-.118237-.26297-.2635515-.26354h-.6624902zm8.5731188 8.46305.70435.69505h-1.049549c-.04201-.33698.120661-.51466.345199-.69505zm-8.5731188.31006h.396875v.38499h-.396875z"
            vectorEffect="none"
          />
        </g>
      </svg>
      <p className={`object-details__text object-details__text--${styleClass}`}>125m2</p>
    </div>
  );
}

export default ObjectDetails;
