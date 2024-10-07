const validate = {}

validate.Register = (form) => {
    const errors = {}; 
    
    if (!form.username.trim()) {
      errors.username = "Username is required";
    }
    
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!form.password.trim()) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    }
  
    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  };

validate.Login = (form) => {
    const errors = {}; 

    if (!form.identify.trim()) {
        errors.identify = "Username or Email is required";
      } 
  
    if (!form.password.trim()) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  export default validate
 
  