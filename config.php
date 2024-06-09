<?php
    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbname = 'formulario-willian';

    // Estabelecer a conexão
    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbname);

    // // Verificar a conexão
    // if ($conexao->connect_errno) {
    //     // Mensagem de erro detalhada
    //     echo "Erro na conexão: " . $conexao->connect_error;
    // } else {
    //     echo "Conexão efetuada com sucesso";
    // }

    // Fechar a conexão
    // $conexao->close();
?>
