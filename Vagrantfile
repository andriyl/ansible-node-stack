# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.ssh.insert_key = false
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "app", "/opt"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 3200
    vb.cpus   = 4
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook        = "ansible/main.yml"
    ansible.inventory_path  = "hosts"
    ansible.limit           = "all"
  end
end
