pipeline {
  agent any

  tools {nodejs "nodejs"}

  stages {
    stage('Example') {
      steps {
        sh 'npm ci'
      }

      steps {
        sh 'npm run test'
      }
    }
  }
