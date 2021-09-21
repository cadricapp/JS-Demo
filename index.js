var colors=['yellow', 'lightgray', 'lightblue', 'aqua', 'lightgreen', 'pink']
function designColor(){
  var design=['Empathy Map: used to drive conversation with multiple stakeholders regarding how the product user(s) & buyer(s) are feeling, and what they are doing, saying, and thinking about their current environment and work situation', 'As-is Scenario: drives stakeholders to walk through the daily lives of the user and/or buyer of the product being considered. The emotional aspects of the empathy map is mapped out here as well', 'Hills: everyone considers what it is that a product will do, who it is for, whether it be a buyer or user, and what is the aspect, or "WOW" factor, that will differentiate the user and/or buyer experience'];
  var box=document.getElementById('containerColors');
  var randIndex=Math.floor(Math.random()*6);
  var randText=Math.floor(Math.random()*3);
  box.style.background=colors[randIndex];
  box.innerHTML="<h2>"+design[randText]+"<h2>";
}
function productColor(){
  var product=['Idea Prioritization: multiple stakeholders share their ideas, cluster similar ideas together into themes, and then make a decision on how to best prioritize ideas based on the potential costs to build a particular product versus the feasibility to build', 'Storyboarding: ideas are hand drawn into what is called lo-fidelity wireframes and this begins to illustrate and connect the user experience with what will become the user interface for the product that will be built', 'Design Sprints: these are one-week sprints for getting ideas out on paper, shared with multiple stakeholders, and built into a User Interface that can be put in the hands of a couple of early adopters of the a new product of interest. This gives real insight into how the customer will feel about the product to then make changes to improve the user experience'];
  var box=document.getElementById('containerColors');
  var randIndex=Math.floor(Math.random()*6);
  var randText=Math.floor(Math.random()*3);
  box.style.background=colors[randIndex];
  box.innerHTML="<h2>"+product[randText]+"<h2>";
}
