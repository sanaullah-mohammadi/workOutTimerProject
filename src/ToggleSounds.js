import { memo } from "react";
 
function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >     
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}
// that way is better for dry code then make another seperate veriable 

export default memo(ToggleSounds);
