node {
    def commit_id
    def previous_id
    stage('Conprobaciones') {
        checkout scm
        
        sh "git rev-parse --short HEAD > .git/commit-id"
        // Leer compromiso de identificación real
        commit_id = readFile('.git/commit-id').trim()
        
        sh "if (test ! -f .git/previous-id); then echo '' > .git/previous-id; fi"
        
        previous_id = readFile('.git/previous-id').trim()
    }
    stage('Build y Push a DockerHub') {
         
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            def app = docker.build("106pawel/emv:${commit_id}", '.').push()
        }
        
        sh "echo ${commit_id} > .git/previous-id"
        
        sh "docker rmi 106pawel/emv:${commit_id}"
    }
    stage('Correr contenedor') {
         
        def cont = docker.image("106pawel/emv:${commit_id}")
        
        cont.pull()
        
        sh "docker stop vue-emv || true && docker rm vue-emv || true"


        // Ejecutar contenedor   ########################
        sh "docker run -d --restart always -p 5434:80 -u root:root --name vue-emv 106pawel/emv:${commit_id}" 
    } 
}