function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("🎉 Account created successfully! Start swapping skills now.");
  this.reset();
});

 /* Made with 💙 by Team SkillSwap  */