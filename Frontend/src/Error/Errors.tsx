// import React from 'react';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("خطا:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>یک خطا رخ داده است.</h1>;
//     }

//     return this.props.children; 
//   }
// }

// export default ErrorBoundary;
