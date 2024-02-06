pipeline {
  agent any

  tools { nodejs 'nodejs' }

  stages {
    stage('Example') {
      steps {
        sh 'npm ci'
        sh 'npm run test'
      }
    }
  }
}
