

import CodeSnippet from './components/CodeSnippet';


function App() {

  const images=[
    {src:"ping_test.png",
      description:"Experiment with a ping test to measure latency based on my public IP address to choose the region us-east-1 with the lowest latency.",
      link:"https://www.cloudping.info",

    
    },
    {src:"region.png",description:"Chose the region us-east-1"},
    {src:"instance.png",description:"Use a Amazon Linux 2023 AMI for the instance"},
    {src:"ssh.png",description:"Allow a ssh connection to the instance from your IP address"},
    {src:"ssh_connect.png",description:"Use the instructions to connect to the instance using SSH"},
    {code:`chmod 400 <your-pem-file>.pem`,description:"Change the permission of the pem file to read-only first you should have downloaded the pem file"},
    {code:`ssh -i <your-pem-file>.pem ec2-user@<your-ec2-public-ip>`,description:"Connect to the instance using SSH"},
    {src:"ssh_connected.png",description:"You are now connected to the instance"},
    {code:`sudo yum update -y`,description:"Update the package list"},
    {code:`sudo yum install -y httpd`,
      description:`Install Apache web server`
    },
    {code:`sudo systemctl start httpd`,
      description:`Start the Apache web server`
    },
    {code:`sudo systemctl enable httpd`,
      description:`Enable the Apache web server to start at boot`
    },
    {code:`sudo systemctl status httpd`,
      description:`Check the status of the Apache web server`
    },
    {
      code:`echo "<html><h1>Welcome to My Website</h1></html>" | sudo tee /var/www/html/index.html`,
      description:`Test if the Apache web server is working`
    },

    {
      code:`scp -i <your-pem-file>.pem /build/* ec2-user@<your-ec2-public-ip>:/var/www/html/`,
      description:`You can copy the build folder to the instance using the scp command if you have a React app after running npm run build otherwise you can just send the files to the instance using the scp command`
    },
    {
      
        link:"http://ec2-18-205-234-21.compute-1.amazonaws.com",
        description:"Please go to the website from this link"
  
    }
  ]

  
  return (
    <div>

    <article className="mb-4">
   

            <div className="container px-4 px-lg-5">

                <div className="row gx-4 gx-lg-5 justify-content-center">
               
                    <div className="col-md-10 col-lg-8 col-xl-7">
                    <h2 className="section-heading">Create a EC2 instance on AWS</h2>
                        {images.map((image) => (
                          <><p>{image.description}</p>
                          {image.link && <><a href={image.link}>{image.link}</a></>}
                          {image.src &&  <><img className="img-fluid" src={image.src} alt="..." /> </>}
                          {image.code && <CodeSnippet code={image.code} />}
                          
                          </>
        ))
                        }
                      
                      
                        
                    </div>
                </div>
            </div>
        </article>
  </div>
  
     

  );
}

export default App;
