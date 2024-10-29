
const ServicePage = () => {
    const services = [
      { 
        title: 'Web Development', 
        description: 'Front-end and back-end development with modern frameworks and CMS solutions.',
        icon: '🌐',
        details: [
          "Front-end technologies like HTML5, CSS3, JavaScript, and popular frameworks like React, Angular, or Vue.js.",
          "Back-end technologies like Node.js, Django, Ruby on Rails, Python, SpringBoot(Java), or .NET.",
          "Content Management Systems (CMS) like WordPress, Drupal, or Joomla."
        ]
      },
      { 
        title: 'Mobile Development', 
        description: 'iOS and Android development, as well as cross-platform solutions.',
        icon: '📱',
        details: [
          "iOS development using Swift or Objective-C.",
          "Android development using Java or Kotlin.",
          "Cross-platform development using frameworks like React Native, Flutter, or Xamarin."
        ]
      },
      { 
        title: 'Cloud Solutions', 
        description: 'Secure and scalable hosting and cloud infrastructure.',
        icon: '☁️',
        details: [
          "Hosting solutions like AWS, Google Cloud Platform, and Microsoft Azure.",
          "Cloud infrastructure management and deployment using Docker and Kubernetes."
        ]
      },
      { 
        title: 'Database Management', 
        description: 'Comprehensive management of SQL and NoSQL databases.',
        icon: '💾',
        details: [
          "SQL databases (MySQL, PostgreSQL, MS SQL) or NoSQL databases (MongoDB, Cassandra, Redis)."
        ]
      },
      { 
        title: 'AI and Machine Learning', 
        description: 'Tailored AI solutions for business needs.',
        icon: '🤖',
        details: [
          "Development using Python and libraries/frameworks like TensorFlow, PyTorch, or Scikit-learn.",
          "Bot development tailored to your organization utilizing LLM, llama2, and OpenAI."
        ]
      },
      { 
        title: 'Cybersecurity', 
        description: 'Application and network security solutions.',
        icon: '🔒',
        details: [
          "Services for securing applications and networks, using tools like firewalls, encryption, and intrusion detection systems."
        ]
      },
      { 
        title: 'UI/UX Design', 
        description: 'Creating intuitive and user-friendly interfaces.',
        icon: '🎨',
        details: [
          "Design tools like Dribbble, Adobe XD, Sketch, Figma for creating user-friendly interfaces."
        ]
      },
      { 
        title: 'DevOps', 
        description: 'CI/CD pipelines for streamlined development.',
        icon: '⚙️',
        details: [
          "Continuous Integration/Continuous Deployment (CI/CD) using tools like Jenkins, GitLab CI, or GitHub Actions."
        ]
      },
      { 
        title: 'E-commerce Solutions', 
        description: 'Comprehensive e-commerce platform implementation.',
        icon: '🛒',
        details: [
          "Implementing e-commerce platforms like Shopify, Magento, or WooCommerce."
        ]
      },
      { 
        title: 'API Development and Integration', 
        description: 'Building and integrating APIs for seamless data exchange.',
        icon: '🔗',
        details: [
          "Building and integrating APIs for connecting software systems."
        ]
      },
      { 
        title: 'Data Analytics and Business Intelligence', 
        description: 'Data gathering, analysis, and insight generation.',
        icon: '📊',
        details: [
          "Services for data warehousing, visualization, and predictive analytics."
        ]
      },
      { 
        title: 'Training and Support', 
        description: 'Training sessions, documentation, and support.',
        icon: '📘',
        details: [
          "Offering training sessions, documentation, and ongoing support for clients."
        ]
      }
    ];
  
    return (
      <div>
          {/* Inline styles for keyframes */}
          <style>
              {`
                  @keyframes slideInLeft {
                      0% {
                          transform: translateX(-100%);
                          opacity: 0;
                      }
                      100% {
                          transform: translateX(0);
                          opacity: 1;
                      }
                  }

                  @keyframes slideInDown {
                      0% {
                          transform: translateY(-50%);
                          opacity: 0;
                      }
                      100% {
                          transform: translateY(0);
                          opacity: 1;
                      }
                  }

                  .service-card {
                      opacity: 0; /* Start as invisible */
                      animation: slideInLeft 1s ease forwards; /* Slide in from the left */
                  }

                  .service-card:nth-child(1) { animation-delay: 0.4s; }
                  .service-card:nth-child(2) { animation-delay: 0.8s; }
                  .service-card:nth-child(3) { animation-delay: 1.2s; }
                  .service-card:nth-child(4) { animation-delay: 1.6s; }
                  .service-card:nth-child(5) { animation-delay: 2s; }
                  .service-card:nth-child(6) { animation-delay: 2.4s; }
                  .service-card:nth-child(7) { animation-delay: 2.8s; }
                  .service-card:nth-child(8) { animation-delay: 3.2s; }
                  .service-card:nth-child(9) { animation-delay: 3.6s; }
                  .service-card:nth-child(10) { animation-delay: 4s; }
                  .service-card:nth-child(11) { animation-delay: 4.4s; }

                  .heading {
                      opacity: 0; /* Start as invisible */
                      animation: slideInDown 1s ease forwards; /* Slide in from the top */
                      animation-delay: 0.2s; /* Delay for heading */
                  }
              `}
          </style>

          {/* Background Image with Heading and Subheading */}
          <div 
              style={{
                  backgroundImage:'url("https://theredteamlabs.com/media/2024/10/5a3c2cef-cloud-security-1024x563-2.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '50vh',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textAlign: 'center'
              }}
          >
              {/* Dark Overlay */}
              <div 
                  style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      zIndex: 1
                  }}
              ></div>
              
              <div style={{ zIndex: 2 }}>
                  <h1 className="heading">OUR SERVICES</h1>
                  <h4 style={{ opacity: 1 }}>Make your Business Smarter with Artificial Intelligence Services & Solutions</h4>
              </div>
          </div>

          {/* Services Section */}
          <div className="container my-5">
              <div className="row">
                  {services.map((service, index) => (
                      <div className="col-md-4 mb-4" key={index}>
                          <div 
                              className={`card h-100 shadow-sm service-card`}
                              style={{
                                  transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
                                  border: '1px solid #ddd',
                              }}
                              onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = '#6021a3';
                                  e.currentTarget.style.backgroundColor = '#f5b54e';
                                  e.currentTarget.style.transform = 'scale(1.05)';
                              }}
                              onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = '#ddd';
                                  e.currentTarget.style.backgroundColor = '#fff';
                                  e.currentTarget.style.transform = 'scale(1)';
                              }}
                          >
                              <div className="card-body text-center">
                                  <div className="mb-3" style={{ fontSize: '2rem' }}>{service.icon}</div>
                                  <h5 className="card-title">{service.title}</h5>
                                  <p className="card-text">{service.description}</p>
                                  <ul className="text-start" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                      {service.details.map((detail, i) => (
                                          <li key={i}>{detail}</li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

  export default ServicePage;