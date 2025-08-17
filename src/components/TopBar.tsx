interface TopBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const TopBar = ({ searchQuery, onSearchChange }: TopBarProps) => {
  return (
    <header id="topbar" className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div id="searchBar" className="flex-1 max-w-md">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              🔍
            </span>
            <input
              id="searchInput"
              type="text"
              placeholder="Search Your Menu Here"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* User Area */}
        <div className="flex items-center space-x-4">
          {/* Language Flags */}
          <div className="flex space-x-1">
            <span className="text-lg">🇺🇸</span>
            <span className="text-lg">🇪🇸</span>
          </div>

          {/* Notifications */}
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <span className="text-lg">🔔</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">CH</span>
            </div>
            <div className="text-sm">
              <div className="font-medium">Courtney Henry</div>
              <div className="text-muted-foreground">Cashier 1st Shift</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;