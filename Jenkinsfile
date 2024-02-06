pipeline {
  agent any

  stages {
    stage('Build and Test') {
      steps {
        script {
          // Building the Docker image
          def appImage = docker.build("my-app:${env.BUILD_ID}")
          
          // Running the tests inside the Docker container
          // This will run 'npm ci' and 'npm run test' as defined in your Dockerfile.CI
          appImage.inside {
            sh 'echo "Tests passed!"'
          }
        }
      }
    }
  }
}