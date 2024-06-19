import { DrawerContent } from "@/components/navigation/drawer-content";
import { CustomOptions } from "@/types/navigation";
import { Drawer } from "expo-router/drawer";
export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "70%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Home",
            iconName: "home",
            isDividir: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="premium"
        options={
          {
            title: "Torne-se Premium",
            iconName: "attach-money",
            isDividir: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="wallet"
        options={
          {
            title: "Carteira",
            iconName: "wallet",
            isDividir: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="movements"
        options={
          {
            title: "Movimentações",
            iconName: "auto-graph",
            isDividir: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="goals"
        options={
          {
            title: "Objetivos",
            iconName: "fmd-good",
            isDividir: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="calendar"
        options={
          {
            title: "Calendário",
            iconName: "calendar-month",
            isDividir: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="categories"
        options={
          {
            title: "Categorias",
            iconName: "category",
            isDividir: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
            isDividir: true,
            sectionTitle: "MAIS",
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
