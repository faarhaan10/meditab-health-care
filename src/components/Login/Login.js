import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const {
    handleGoogleSignIn,
    handleGitHubSignIn,
    handleEmailPassSignUp,
    handleEmailPassSignIN,
    error,
    setError,
    setIsLoading,
    handleUpdateProfile,
  } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const onSubmit = (data) => {
    const { name, email, password } = data;

    if (password.length >= 6) {
      if (isLogin) {
        handleUserLogin(email, password);
      } else {
        handleUserReg(name, email, password);
      }
    } else {
      setError("Password should be at least 6 Characters");
    }
  };

  const handleToggle = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleGoogleLogin = () => {
    handleGoogleSignIn()
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGitHubLogin = () => {
    handleGitHubSignIn()
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUserLogin = (email, password) => {
    handleEmailPassSignIN(email, password)
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUserReg = (name, email, password) => {
    handleEmailPassSignUp(email, password)
      .then((res) => {
        handleUpdateProfile(name);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center p-5">
        <div className="border rounded p-2 meditab shadow">
          <div className="" style={{ width: "20rem" }}>
            <h2>Please {!isLogin ? "Register" : "Login"}</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {!isLogin && (
                <Form.Group className="">
                  <Form.Label>Enter Your Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    required
                  />
                </Form.Group>
              )}

              <Form.Group className="">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  required
                />
                <Form.Text className="text-muted">
                  {!isLogin
                    ? "We'll never share your email with anyone else."
                    : "mail@example.com"}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  required
                />
              </Form.Group>

              <Form.Group className="">
                <Form.Check
                  onChange={handleToggle}
                  type="checkbox"
                  label={isLogin ? "Create an account" : "Already Registered?"}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 fw-bold">
                {isLogin ? "Log in" : "Register"}
              </Button>
              {error && (
                <p className="text-danger text-center m-0 p-0">{error}</p>
              )}
            </Form>
          </div>

          {/* google and github login  */}
          <div className="d-flex justify-content-center">
            <div className="">
              <p className="text-success text-center m-0 p-0">Sign in with</p>
              <div className="">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="m-2 btn btn-outline-success rounded-pill"
                >
                  <i className="fab fa-google"></i>
                </button>

                <button
                  onClick={handleGitHubLogin}
                  type="button"
                  className="m-2 btn btn-outline-dark rounded-pill"
                >
                  <i className=" fab fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
