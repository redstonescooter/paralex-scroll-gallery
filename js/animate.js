function animateNewsPaper(){
  const newspaperSpinning = [
      { transform: "rotate(0) scale(1)" },
      { transform: "rotate(360deg) scale(0)" },
    ];
    
    const newspaperTiming = {
      duration: 2000,
      direction: "alternate",
      iterations: 2,
    };
    
    const newspaper = document.querySelector(".newspaper");
    
    newspaper.addEventListener("click", () => {
      newspaper.animate(newspaperSpinning, newspaperTiming);
    });
}
export default animateNewsPaper;