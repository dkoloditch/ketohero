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
4. `git clone` this repository to your machine.
5. `cd` into the repository.
6. Shut down any other Vagrant machines that are running to avoid port conflicts.
7. Then `vagrant up`.

Be prepared to enter your password!

Running `vagrant up` downloads an Ubuntu image to your host machine and
provisions it with everything this project needs to run. This will take a few
minutes, so be patient.

If `vagrant up` errors out, run `vagrant status` to view the status of your
Vagrant machine, then use `vagrant up` or `vagrant provision` as needed to
complete the provisioning.

## Running the App

1. `vagrant ssh` to login into the virtual machine.
2. `cd /vagrant/ketohero` to navigate to the project.
3. `node .` to start the server.
4. Open your browser and go to http://ketohero.dev:3000.
5. Rejoice!

## Other

To gain additional features from strongloop, such as clustering:
```
npm install -g strongloop
slc run
```
