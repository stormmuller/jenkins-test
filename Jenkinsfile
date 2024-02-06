pipeline {
  agent any

  tools { nodejs 'Node 18' }

  stages {
    stage('Example') {
      steps {
        sh 'npm ci'
        sh 'npm run test'
      }
    }
  }
}
