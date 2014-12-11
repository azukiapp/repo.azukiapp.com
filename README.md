## Ubuntu

1. Adicione o repositório do Azuki a lista de sources do apt:

  **Trusty 14.04 (LTS) (64-bit):**
  ```bash
  echo "deb [arch=amd64] http://repo.azukiapp.com trusty main" | \
    sudo tee /etc/apt/sources.list.d/azuki.list
  ```

  **Precise 12.04 (LTS) (64-bit):**
  ```bash
  echo "deb [arch=amd64] http://repo.azukiapp.com precise main" | \
    sudo tee /etc/apt/sources.list.d/azuki.list
  ```

2. Adicionando as chaves do Azuki ao seu keychain local:

  ```bash
  sudo apt-key adv --keyserver keys.gnupg.net \
    --recv-keys 022856F6D78159DF43B487D5C82CF0628592D2C9
  ```

3. Atualiza a lista de pacotes e instale o `azk`:

  ```bash
  sudo apt-get update
  sudo apt-get install azk
  ```

## Fedora 20

1. Adicione o repositório do Azuki:

  ```bash
  $ echo "[azuki]
  name=azk
  baseurl=http://repo.azukiapp.com/fedora20
  enabled=1
  gpgcheck=1
  " > /etc/yum.repos.d/azuki.repo
  ```

2. Adicionando as chaves do Azuki ao seu keychain local:

  ```bash
  rpm --import \
    'http://repo.azukiapp.com/keys/azuki.asc'
  ```

3. Instale o `azk` e suas dependências:

  ```bash
  sudo yum install azk
  ```
