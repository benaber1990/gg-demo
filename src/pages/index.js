import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const titleContainer = {
  color: "white",
  fontFamily: "anton-regular",
  justifyContent: "center",
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage = () => {
  const [showSecond, setShowSecond] = useState(false);

  const changeSecondStateHandler = () =>
    setShowSecond((prevState) => !prevState);

  const UpcomingGamesComp = ({ fixture }) => (
    <div
      onClick={changeSecondStateHandler}
      style={{
        backgroundColor: "white",
        marginRight: 30,
        marginLeft: 30,
        padding: 15,
        borderRadius: 8,
        width: 300,
      }}
    >
      <h2 style={{ textAlign: "center", fontFamily: "Open Sans" }}>
        {fixture}
      </h2>
    </div>
  );

  return (
    <main
      style={{
        backgroundColor: "#011638",
        paddingTop: 30,
        paddingBottom: 500,
        borderRadius: 8,
        alignContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          style={{
            color: "white",
            marginRight: 20,
            fontSize: 14,
            fontFamily: "Open Sans",
          }}
        >
          Home
        </h2>
        <h2
          style={{
            color: "white",
            marginRight: 20,
            fontSize: 14,
            fontFamily: "Open Sans",
          }}
        >
          All Games{" "}
        </h2>
        <h2 style={{ color: "white", fontSize: 14, fontFamily: "Open Sans" }}>
          My Account
        </h2>
      </div>
      <h1
        style={{
          fontFamily: "Open Sans",
          color: "white",
          textAlign: "center",
        }}
      >
        Golden Goal
        <br />
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={changeSecondStateHandler}
          style={{
            width: "90%",
            maxWidth: 500,
            height: 250,
            borderRadius: 8,
            backgroundColor: "white ",
            marginTop: 20,
            marginHorizontal: 30,
          }}
        >
          <h1
            style={{
              fontFamily: "Open Sans",
              textAlign: "center",
            }}
          >
            Burnley vs Man City
          </h1>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Open Sans",
            }}
          >
            Current prize pool: £826
          </p>
        </div>
      </div>
      {showSecond && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={changeSecondStateHandler}
            style={{
              width: "90%",
              maxWidth: 500,
              borderRadius: 8,
              backgroundColor: "white ",
              marginTop: 20,
              paddingBottom: 30,
            }}
          >
            <h2 style={{ fontFamily: "Open Sans", textAlign: "center" }}>
              Your time for this game is
            </h2>
            <div
              style={{
                backgroundColor: "#87A330",
                borderRadius: 6,
                // padding: 20,
                marginRight: 60,
                marginLeft: 60,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <h2
                style={{
                  fontFamily: "Open Sans",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Min: {Math.floor(Math.random() * 90)} Sec:{"   "}
                {Math.floor(Math.random() * 60)}
              </h2>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <UpcomingGamesComp fixture="New Utd vs Burnley" />
        <UpcomingGamesComp fixture="Chelsea vs Liverpool" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <UpcomingGamesComp fixture="Everton vs Fulham" />
        <UpcomingGamesComp fixture="Man Utd vs Wolves" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
