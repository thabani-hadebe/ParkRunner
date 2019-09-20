export interface Menu {
  data: RoleMenu;

}

export interface RoleMenu{
  role?: number;
  items?: MenuItem[];
}

export interface MenuItem{
  id?: number;
  label?: string;
  decorator?: string;
  items?: SubMenuItems[];
}

export interface SubMenuItems{
  id?: number;
  label?: string;
  decorator?: string;
}
