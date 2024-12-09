import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

import devops from '../../assets/images/devops.png';
import loan from '../../assets/images/loan.png';
import Frauddetectionsystem from '../../assets/images/Frauddetectionsystem.png';
import flutter from '../../assets/images/flutter.png';
import actuariallife from '../../assets/images/actuariallife.png';
import finetune from '../../assets/images/finetune.png';
import computervision from '../../assets/images/computervisionproject.png';
import montecarlo from '../../assets/images/montecarlo.png';
import statistic from '../../assets/images/statistic.png';

export default function Opensource(props) {

  
  const images = [
    { src: finetune, name: "- Sales Sentiment Analysis and questions answering system", description: "-Analyzed sentiments in Amazon sales and built a question-answering system using generative AI LLMs(LLaMA2, RoBERTa)then fine-tuned RoBERTa with PEFT, prompt engineering, RAG, LangChain." },
    { src: devops, name: "DevOps", description: "I’ve set up a CI/CD pipeline with Nexus, Docker Compose, SonarQube, Prometheus, and Grafana, automating code deployment and monitoring with email status notifications." },
    { src: loan, name: "Loan approval system", description: "A system for loan approval that makes the credit approval process easier using machine learning, deep learning, NLP, statistics, Power BI, React.js, and Flask." },
    { src: Frauddetectionsystem, name: "Fraud detection system", description: "Contributed to the Monetics project, detecting fraudulent transactions with machine learning and XAI." },
    { src: flutter, name: "Electric Bike Charging Management System", description: "A scalable solution with Flutter, Firebase, and real-time monitoring." },
    { src: actuariallife, name: "Life Actuarial Science project", description: "Estimating and projecting the mortality rates of two groups of British policyholders using R." },
    { src: computervision, name: "Object detection in remote sensing images project", description: "Object detection in remote sensing images using satellite imagery with deep learning and computer vision." },
    { src: montecarlo, name: "Monte carlo simulations", description: "I used Python to implement Monte Carlo simulations, which are essential in data science for predicting outcomes, understanding uncertainty, and assessing risk by running multiple random scenarios to estimate potential results." },
    { src: statistic, name: "Factors Affecting Grades ", description: "Univariate and bivariate analyses were conducted using Q-Q plots, pie charts, chi-square tests, Pearson and Spearman correlations,Kruskal-Wallis test. Key factors were identified using multiple linear regression and Random Forest." },


  ];
  
  const header = { title: "Projects", description: "Here are some of my projects." };

  const publications = {
    data: [
      { title: "Fine tuning techniques for large language models (llms )", link: "https://medium.com/@islem.maiti/fine-tuning-techniques-for-large-language-models-llms-dfd5e66b5275", description: "This article explores the role of large language models (LLMs) in finance and techniques for fine-tuning them, including Agentic RAG, RAG, PEFT, and advanced prompt engineering methods like chain of thought, sequential prompting, and REACT to boost LLM performance in real-world applications." },
    ],
    header: { title: "Publications", description: "Here are some of my published articles." }
  };

  function ImagesComponent() {
    return (
      <>
        {images.map((image, index) => (
          <div key={index} className="card">
            <img className="card-image" src={image.src} alt={`image-${index}`} />
            <div className="card-name">{image.name}</div>
            <div className="card-description">{image.description}</div>
          </div>
        ))}
        
        <div className="see-more-container">
          <a href="https://github.com/amirakhalfy" target="_blank" rel="noopener noreferrer">
            <button className="see-more-button">See More Projects</button>
          </a>
        </div>
      </>
    );
  }

  function PublicationsComponent() {
    return (
      <>
        {publications.data.length > 0 && (
          <div className="basic-projects">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1 className="publications-heading-text" style={{ color: props.theme.text }}>
                  {publications.header.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: props.theme.secondaryText }}>
                  {publications.header.description}
                </p>
              </div>
            </div>
            <div className="repo-cards-div-main">
              {publications.data.map((pub, index) => (
                <div key={index} className="publication-card">
                  <h2>{pub.title}</h2>
                  <p>{pub.description}</p>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  useEffect(() => {
    const myTimer = setInterval(() => {
      console.log('Timer called');
    }, 1000);

    return () => clearInterval(myTimer);
  }, []);

  return (
    <div className="opensource-main">
      <Header theme={props.theme} title={header.title} description={header.description} />
      <div className="images-container">
        <ImagesComponent />
      </div>
      <PublicationsComponent />
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}
