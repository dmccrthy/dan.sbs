{
    "title": "Setting-up Ruby with RVM on Fedora",
    "slug": "posts/setup-ruby-on-fedora",
    "date": "2024-07-19",
    "tags": "Ruby, RVM, Fedora, Linux",
    "excerpt": "During my time setting up Ruby on Fedora Linux, I've experience a number of issues, which has lead me to create this guide documenting the Ruby setup process using Ruby enVironment Manager (RVM).",
    "image": "../../images/posts/setup-ruby-on-fedora.png"
}
---

During my time setting up Ruby on Fedora Linux, I've experience a number of issues, which has lead me to create this guide documenting the Ruby setup process using Ruby enVironment Manager (RVM).

1. To begin you need to **allow the rvm.io GPG keys**

    ```shell
    gpg2 --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
    ```

2. From here you will want to run the following script to install RVM

    ```shell
    \curl -sSL https://get.rvm.io | bash
    ```

    - Note: If you don't use bash (zsh users :c), you should still run the install script with bash. **It will not impact the function of RVM.** 

3. Next, run the following commands to install, and set default ruby version

    ```shell
    rvm get stable
    rvm --default use ruby
    ```

    - When installing Ruby **you might run into an SSL error**. In my case running ```rvm get head``` was able to resolved this issue.
    - **Note: RVM expects that your running your shell with the --login flag.**
        -  You should be able to add this after the path to your shell in whatever terminal you use *(EX: "/usr/bin/bash --login")*
        - This is the same for other shells like zsh.

At this point the latest version of Ruby should be installed and ready to use. I've found that this method of setup works alot better than the ~900 different Ruby packages offered through dnf lol.
