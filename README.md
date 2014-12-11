## Ubuntu

1. Add the repository Azuki the sources list of apt:

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

2. Adding Azuki keys to your local keychain:

  ```bash
  sudo apt-key adv --keyserver keys.gnupg.net \
    --recv-keys 022856F6D78159DF43B487D5C82CF0628592D2C9
  ```

3. Updates the list of packages and install `azk`:

  ```bash
  sudo apt-get update
  sudo apt-get install azk
  ```

## Fedora 20

1. Add the repository Azuki:

  ```bash
  $ echo "[azuki]
  name=azk
  baseurl=http://repo.azukiapp.com/fedora20
  enabled=1
  gpgcheck=1
  " > /etc/yum.repos.d/azuki.repo
  ```

2. Adding Azuki keys to your local keychain:

  ```bash
  rpm --import \
    'http://repo.azukiapp.com/keys/azuki.asc'
  ```

3. Install `azk` and its dependencies:

  ```bash
  sudo yum install azk
  ```


## More

  [Complete Documentation](http://docs.azk.io/pt-BR/installing/linux.html)
