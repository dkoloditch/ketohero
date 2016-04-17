# Keto Hero

[waffle board for project tasks](https://waffle.io/codefordenver/ketohero)

## Setup

Ketohero uses a [Vagrant](https://www.vagrantup.com/) virtual machine as the
development environment. This isolates your dev environment from your host
machine, ensures everyone has the same setup, and automatically installs
everything you need to get going. Just follow these steps:

1. Install [VirtualBox](https://www.virtualbox.org).
2. Install [Vagrant](https://www.vagrantup.com).
3. Run `vagrant plugin install vagrant-hostmanager` to install the [Vagrant Hostmanager Plugin](https://github.com/smdahlen/vagrant-hostmanager).
4. Clone this repository to your machine.
5. Navigate to the repo directory.
6. Run `vagrant up`.
7. Enter your password when prompted.

Running `vagrant up` downloads an Ubuntu image to your host machine and
provisions it with everything this project needs to run. This will take a few
minutes, so be patient.

## Running the App

Once `vagrant up` has finished, follow these steps to start the server.

1. `vagrant ssh` to login into the virtual machine.
2. `cd /vagrant` to navigate to the project.
3. `node .` to start the server.
4. Open your browser and go to http://ketohero.dev:3000.
5. Rejoice!

## Coding

Just code as you normally would in the repo directory you cloned above. Vagrant
automatically syncs with this repo directory and runs your code inside the
virtual machine.

## Other

To gain additional features from StrongLoop, such as clustering, run the
following inside Vagrant, in the `/vagrant` directory:
```
npm install -g strongloop
slc run
```
