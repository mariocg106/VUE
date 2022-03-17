node {
    def commit_id
    def previous_id
    stage('Conprobaciones') {
        checkout scm
        // Guardo la confirmación de id en el archivo
        sh "git rev-parse --short HEAD > .git/commit-id"
        // Leer compromiso de identificación real
        commit_id = readFile('.git/commit-id').trim()
        // Compruebe si existe una confirmación de id anterior
        sh "if (test ! -f .git/previous-id); then echo '' > .git/previous-id; fi"
        // Lee la confirmación de id anterior
        previous_id = readFile('.git/previous-id').trim()
    }
    stage('Build y Push a DockerHub') {
        // Build and push the image ###############################
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            def app = docker.build("luisdocker361/proyecto-vue:${commit_id}", '.').push()
        }
        // Guardo la confirmación de id anterior en el archivo
        sh "echo ${commit_id} > .git/previous-id"
        // Borra imagen #############################
        sh "docker rmi luisdocker361/proyecto-vue:${commit_id}"
    }
    stage('Correr contenedor') {
        // guardar imagen en restricción #################################
        def cont = docker.image("luisdocker361/proyecto-vue:${commit_id}")
        // Descargamos imagen
        cont.pull()
        // Eliminar contenedor si existe con el mismo nombre
        sh "docker stop cont-vue || true && docker rm cont-vue || true"


        // Ejecutar contenedor   ########################
        sh "docker run -d --restart always -p 5434:80 -u root:root --name cont-vue luisdocker361/proyecto-vue:${commit_id}" 
    } 
}