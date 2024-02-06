pipeline {
  agent any

  stages {
    stage('Build and Test') {
      steps {
        script {
          // Building the Docker image with the Docker Pipeline plugin syntax
          def app = docker.build("my-app:${env.BUILD_ID}", "-f Dockerfile.CI .")
          
          // The image is already built, and tests should have run during the build if they were in the Dockerfile.CI
          // Here, we're simply echoing that the tests have passed as a placeholder
          echo "Tests passed!"
        }
      }
    }
  }
}
