import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    if (word === "success") {
      word = "done";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  if (!props.alert) return null;

  const alertStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    danger: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800"
  };

  const iconPaths = {
    success: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    danger: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
    warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  };

  return (
    <div className={`fixed top-20 right-4 z-50 max-w-md animate-slide-in-right`}>
      <div className={`${alertStyles[props.alert.type] || alertStyles.info} border rounded-xl shadow-lg p-4 flex items-start gap-3`}>
        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[props.alert.type] || iconPaths.info} />
        </svg>
        <div className="flex-1">
          <p className="font-semibold text-sm">{capitalize(props.alert.type)}</p>
          <p className="text-sm mt-1">{props.alert.msg}</p>
        </div>
      </div>
    </div>
  );
}